import { NextRequest, NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.NEXT_PUBLIC_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
  },
});

export async function GET(req: NextRequest) {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: `7daysAgo`,
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "date",
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

    response.rows?.forEach((row: any) => {
      totalVisitors += parseInt(row.metricValues[0].value);
      newUsers += parseInt(row.metricValues[1].value);
      averageSessionDuration += parseInt(row.metricValues[2].value);
      eventCount += parseInt(row.metricValues[3].value);
    });

    const avgSessionDurationPerVisitor = averageSessionDuration / totalVisitors;
    const minutesSession = Math.floor(avgSessionDurationPerVisitor / 60);
    const secondsSession = Math.floor(avgSessionDurationPerVisitor % 60);

    return NextResponse.json({
      totalVisitors,
      newUsers,
      averageSessionDuration: `${minutesSession}m ${secondsSession}s`,
      eventCount,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
