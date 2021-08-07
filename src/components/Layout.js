
import Head from "./Head";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

function Layout({children, title, author }){
  const Container = styled.div`
    position: relative;
    min-heigth: 100vh;
  `
	return(
	<Container>
      <Head title={title}/>
      <Header prop1='Home' prop2='Contact'/>
      {children}
      <Footer author={author} />
    </Container>
	);
}

export default Layout