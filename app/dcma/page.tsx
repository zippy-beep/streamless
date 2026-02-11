import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Complaint · Streamless",
  description: "File a DMCA copyright complaint or report copyright infringement on Streamless.",
};

export default function DcmaPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold text-black dark:text-white">
        DMCA Copyright Complaint
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        Streamless respects the intellectual property rights of others. If you believe that your 
        copyrighted work has been copied in a way that constitutes copyright infringement, please 
        submit a DMCA complaint.
      </p>

      <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-300">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Filing a DMCA Notice
          </h2>
          <p className="mt-3">
            To file a DMCA copyright complaint, please send a written notification to our 
            designated agent at:
          </p>
          <div className="mt-4 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
            <p className="font-mono text-sm">
              Email: <a href="mailto:support@streamless.cloud" className="text-blue-600 hover:underline dark:text-blue-400">support@streamless.cloud</a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Required Information
          </h2>
          <p className="mt-3">Your DMCA notice must include the following information:</p>
          <ul className="mt-4 list-inside list-decimal space-y-2 pl-4">
            <li>A physical or electronic signature of the copyright owner or authorized representative</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing, with sufficient detail for us to locate it</li>
            <li>Your contact information (name, address, telephone number, and email address)</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
            <li>A statement that the information in the notification is accurate, under penalty of perjury</li>
            <li>A statement that you are authorized to act on behalf of the copyright owner</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Important Notice
          </h2>
          <p className="mt-3">
            Streamless is a directory and information site about streaming services. We do not 
            host, store, or distribute any copyrighted content. We provide information about 
            legitimate streaming platforms and devices.
          </p>
          <p className="mt-3">
            If you believe that content on a streaming platform listed on our site infringes 
            your copyright, you should contact that platform directly. We can remove links or 
            references to platforms upon receipt of a valid DMCA notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Counter-Notification
          </h2>
          <p className="mt-3">
            If you believe that your content was removed or disabled by mistake or misidentification, 
            you may file a counter-notification with us. The counter-notification must include:
          </p>
          <ul className="mt-4 list-inside list-decimal space-y-2 pl-4">
            <li>Your physical or electronic signature</li>
            <li>Identification of the material that was removed and its location before removal</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
            <li>Your name, address, telephone number, and consent to jurisdiction</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Repeat Infringers
          </h2>
          <p className="mt-3">
            Streamless maintains a policy of terminating, in appropriate circumstances, the accounts 
            or access of users who are repeat infringers of copyright.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="font-semibold text-black dark:text-white">Contact Information</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          For DMCA complaints, copyright questions, or other legal inquiries:
        </p>
        <p className="mt-3 font-mono text-sm">
          <a href="mailto:support@streamless.cloud" className="text-blue-600 hover:underline dark:text-blue-400">
            support@streamless.cloud
          </a>
        </p>
      </div>

      <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
        Last updated: February 11, 2026
      </p>
    </section>
  );
}
