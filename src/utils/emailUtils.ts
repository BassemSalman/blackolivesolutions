// utils/emailUtils.ts

export interface BaseFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CompanyFormData extends BaseFormData {
  company: string;
}

export interface TalentFormData extends BaseFormData {
  position: string;
  experience: string;
}

export type FormData = CompanyFormData | TalentFormData;

interface EmailTemplate {
  subject: string;
  body: string;
}

const isCompanyForm = (data: FormData): data is CompanyFormData => {
  return "company" in data;
};

const isTalentForm = (data: FormData): data is TalentFormData => {
  return "position" in data && "experience" in data;
};

export const createEmailTemplate = (
  data: FormData,
  type: "company" | "talent"
): EmailTemplate => {
  let subject: string;
  let body: string;

  if (type === "company" && isCompanyForm(data)) {
    subject = `New Company Inquiry from ${data.name}`;
    body = `Hello,

You have received a new inquiry from a company:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company}

Message:
${data.message}

Best regards,
${data.name}`;
  } else if (type === "talent" && isTalentForm(data)) {
    subject = `Job Application: ${data.position} - ${data.name}`;
    body = `Hello,

You have received a new job application:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Position: ${data.position}
Experience: ${data.experience}

Message:
${data.message}

Best regards,
${data.name}`;
  } else {
    throw new Error("Invalid form data or type mismatch");
  }

  return { subject, body };
};

export const openEmailClient = (
  data: FormData,
  type: "company" | "talent",
  customRecipient?: string
): void => {
  const recipient = customRecipient || "TODO";
  const emailTemplate = createEmailTemplate(data, type);

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
    emailTemplate.subject
  )}&body=${encodeURIComponent(emailTemplate.body)}`;

  window.location.href = mailtoUrl;
};
