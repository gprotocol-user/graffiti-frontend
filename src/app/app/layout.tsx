import { Toaster } from "@/components/ui/toaster";
import ContextProvider from "@/app/context";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ContextProvider>{children}</ContextProvider>
      <Toaster />
    </>
  );
};

export default RootLayout;
