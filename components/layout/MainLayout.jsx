import { CustomFooter } from "@/components/footer";
import ProviderWrapper from "@/components/layout/ProviderWrapper";
import { CustomNav } from "@/components/nav";

export function Layout({ children }) {
  return (
    <ProviderWrapper>
      <CustomNav />
      <div className="mt-0 mb-0">{children}</div>
      <CustomFooter />
    </ProviderWrapper>
  );
}
