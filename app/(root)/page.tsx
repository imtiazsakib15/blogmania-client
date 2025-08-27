import Navbar from "@/components/navbar";

const HomaPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomaPage;
