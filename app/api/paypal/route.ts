import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("=========================================");
    console.log("🔥 تم استقبال إشعار مبيعات جديد بنجاح! 🔥");
    console.log("رقم معاملة الدفع (Order ID):", body.orderId);
    console.log(
      "اسم العميل بالكامل:",
      body.details?.payer?.name?.given_name,
      body.details?.payer?.name?.surname
    );
    console.log("البريد الإلكتروني للمشتري:", body.details?.payer?.email_address);
    console.log(
      "إجمالي المبلغ المستلم:",
      body.details?.purchase_units?.[0]?.amount?.value,
      body.details?.purchase_units?.[0]?.amount?.currency_code
    );
    console.log("=========================================");

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: '"متجر المبيعات" <ahmedkandeel92@icloud.com>',
      to: "ahmedkandeel92@icloud.com",
      subject: "🔥 مبيعة جديدة تمت بنجاح! 🔥",
      text: `مبروك! تم بيع منتج. رقم العملية: ${body.orderId}. المبلغ: ${body.details?.purchase_units?.[0]?.amount?.value}`,
    });

    return NextResponse.json(
      { success: true, message: "Order logged into automated system" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook Processing Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
