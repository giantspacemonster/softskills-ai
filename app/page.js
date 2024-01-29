import IntroContent from "@/components/IntroContent/IntroContent";
import PageContainer from "@/components/ui/PageContainer/PageContainer";
import SectionDivider from "@/components/ui/SectionDivider/SectionDivider";
import StylizedPageSeparator from "@/components/ui/StylizedPageSeparator/StylizedPageSeparator";

export default function Home() {
  return (
    <main>
      <IntroContent />
      <SectionDivider />
      {/* <StylizedPageSeparator /> */}
      <PageContainer />
    </main>
  );
}
