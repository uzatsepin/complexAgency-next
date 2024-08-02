import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import googleData from '../../complex-google.json';

// ? Задаём PropertyId
const propertyId = googleData.property_id;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: googleData.client_email,
    private_key: googleData.private_key.replace(/\n/gm, "\n"), // очищаем от лишних символов
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