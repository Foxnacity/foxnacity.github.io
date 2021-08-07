import styled from 'styled-components'

function Footer({author}){
	const Footer = styled.footer`
		postion: sticky;
		width: 100%;
		top: 100%;
		margin: auto;
		padding: 5px;
		text-align: center;
		background-color: red;
	`
	return(
		<Footer>
			<h6>2021&copy;{author}</h6>
		</Footer>
	);
}
export default Footer