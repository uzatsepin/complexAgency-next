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
        name: "totalRevenue"
      }
    ],
  });

  // Возвращаем ответ
  return res.status(200).json({
    response,
  });
}