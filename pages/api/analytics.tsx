import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// ? Задаём PropertyId
const propertyId = process.env.NEXT_PUBLIC_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\n/gm, "\n"), // очищаем от лишних символов
  },
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // ? Используем метод properties.runReport
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: `7daysAgo`, //?  например, "7daysAgo" или "30daysAgo"
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "date", // данные будут рассчитаны по годам
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
      {
        name: "newUsers"
      },
      {
        name: 'averageSessionDuration'
      },
      {
        name: 'eventCount'
      },
    ],
  });

  let totalVisitors = 0;
  let newUsers = 0;
  let averageSessionDuration = 0;
  let eventCount = 0;
  let userEngagementDuration = 0;

  response.rows?.forEach((row: any) => {
    totalVisitors += parseInt(row.metricValues[0].value);
    newUsers += parseInt(row.metricValues[1].value);
    averageSessionDuration += parseInt(row.metricValues[2].value);
    eventCount += parseInt(row.metricValues[3].value);
  });

  const avgSessionDurationPerVisitor = averageSessionDuration / totalVisitors;
  const minutesSession = Math.floor(avgSessionDurationPerVisitor / 60);
  const secondsSession = Math.floor(avgSessionDurationPerVisitor % 60);


  // Возвращаем ответ
  return res.status(200).json({
    totalVisitors,
    newUsers,
    averageSessionDuration: `${minutesSession}m ${secondsSession}s`,
    eventCount,
  });
}