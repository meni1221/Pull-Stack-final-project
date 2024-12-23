import { Container } from "@mui/material";
import { ReactNodeChildrenProp } from "../interface/ReactNodeChildrenProp";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Layout({ children }: ReactNodeChildrenProp) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "98vh" }}>
      <Header />
      <Main children={children} />
      <Footer />
    </Container>
  );
}
