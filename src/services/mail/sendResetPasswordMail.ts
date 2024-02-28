import { EMAIL, PASSWORD } from "../../__CONSTANTS__";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

export default async (email: string, token: string) => {
  const emailHtml = `
<html ⚡4email>
  <head>
    <meta charset="utf-8">
    <style amp4email-boilerplate>body{visibility:hidden}</style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
  </head>
  <body>
    <h1>Reset Password</h1>
    <p>Here is your reset password token:</p>
    <p><strong>${token}</strong></p>
    <p>To reset your password, please click the following link:</p>
    <p><a href="http://example.com/reset-password?token=${token}">Reset Password</a></p>
    <p>If you did not request a password reset, please ignore this email.</p>
  </body>
</html>`;

  const emasilHtml = `<div style="background-color:#ffffff; padding: 45px 0 34px 0; border-radius: 24px; margin:40px auto; max-width: 600px;">
							<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="auto" style="border-collapse:collapse">
								<tbody>
									<tr>
										<td align="center" valign="center" style="text-align:center; padding-bottom: 10px">
											<!--begin:Email content-->
											<div style="text-align:center; margin:0 60px 34px 60px">
												<div style="font-size: 14px; font-weight: 500; margin-bottom: 27px; font-family:Arial,Helvetica,sans-serif;">
													<p style="margin-bottom:9px; color:#181C32; font-size: 22px; font-weight:700">You are almost done!</p>
													<p style="margin-bottom:2px; color:#7E8299">Click here to create a new password/p>
												</div>
												<a href="http://localhost:3011/auth/new-password/${token}" target="_blank" style="background-color:#50cd89; border-radius:6px;display:inline-block; padding:11px 19px; color: #FFFFFF; font-size: 14px; font-weight:500; font-family:Arial,Helvetica,sans-serif;">Change Password</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>`;

  const mailOptions = {
    from: "mgiwa78@gmail.com",
    to: email,
    subject: "Password Reset",
    text: token,
    html: emasilHtml
  };

  await transporter.sendMail(
    mailOptions,
    (error: Error | null, info: nodemailer.SentMessageInfo) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    }
  );
};
