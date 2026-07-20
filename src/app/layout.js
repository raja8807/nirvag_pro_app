import { manrope } from "@/styles/fonts";
import "../styles/globals.scss";
import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";
import AdminLayout from "@/components/layout/AdminLayout/AdminLayout";
import { LeadProvider } from "@/context/LeadContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <AOSProvider>
          <LeadProvider>
            <AdminLayout>
              <main style={{ flex: 1 }}>{children}</main>
            </AdminLayout>
          </LeadProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
