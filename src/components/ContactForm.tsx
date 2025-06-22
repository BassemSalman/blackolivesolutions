import { AlertCircle, CheckCircle, Loader } from "lucide-react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CompanyFormData,
  FormData,
  TalentFormData,
  openEmailClient,
} from "../utils/emailUtils";

interface ContactFormProps {
  type: "company" | "talent";
  title: string;
  description: string;
  recipientEmail?: string; // Optional override for recipient email
}

// Internal form data type that includes all possible fields
type InternalFormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  experience?: string;
  message: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
  type,
  title,
  description,
  recipientEmail, // Optional override for recipient email
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InternalFormData>();

  const onSubmit = async (data: InternalFormData) => {
    setIsSubmitting(true);

    try {
      // Transform internal form data to proper FormData type
      let formData: FormData;

      if (type === "company") {
        formData = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          company: data.company!,
        } as CompanyFormData;
      } else {
        formData = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          position: data.position!,
          experience: data.experience!,
        } as TalentFormData;
      }

      // Use the email utility function
      openEmailClient(formData, type, recipientEmail);

      setFormStatus("success");
      reset();
    } catch (error) {
      console.error("Error creating email:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="font-playfair text-2xl font-bold text-blue-900 mb-2">
        {title}
      </h3>
      <p className="font-raleway text-gray-600 mb-6">{description}</p>

      {formStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center text-green-800">
          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>
            Your email client should have opened with a pre-filled message.
            Please send the email to complete your submission.
          </p>
        </div>
      ) : formStatus === "error" ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-800">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>
            Sorry, there was an error creating the email. Please try again
            later.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor={`${type}-name`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              id={`${type}-name`}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${type}-email`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              id={`${type}-email`}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${type}-phone`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id={`${type}-phone`}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("phone")}
            />
          </div>

          {type === "company" ? (
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name *
              </label>
              <input
                id="company-name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("company", {
                  required: "Company name is required",
                })}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.company.message}
                </p>
              )}
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Desired Position *
                </label>
                <input
                  id="position"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  {...register("position", {
                    required: "Position is required",
                  })}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.position.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  {...register("experience", {
                    required: "Experience is required",
                  })}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </>
          )}

          <div>
            <label
              htmlFor={`${type}-message`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message *
            </label>
            <textarea
              id={`${type}-message`}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition duration-200 flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Opening Email Client...
              </>
            ) : (
              "Send via Email Client"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
