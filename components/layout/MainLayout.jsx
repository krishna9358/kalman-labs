import { CustomFooter, FooterText } from "@/components/footer";
import ProviderWrapper from "@/components/layout/ProviderWrapper";
import { CustomNav } from "@/components/nav";

export function Layout({ children }) {
  return (
    <ProviderWrapper>
      <CustomNav />
      {children}
      <FooterText />
      <CustomFooter />
    </ProviderWrapper>
  );
}
