import styled, {keyframes} from "styled-components"
import colors from "../styles/colors";
import {useEffect} from 'react'

function Header({prop1, prop2, prop3}) {

	function changeopacity(){
		let x = window.matchMedia('(min-width:1024px)')
		const headbar = document.querySelector('#headbar')
		if(x.matches){
			const win = window.scrollY
			const val = (0+(win/580))
			headbar.style.backgroundColor=`rgba(71,92,122, ${val})`
		} else {
			headbar.style.backgroundColor="rgb(71,92,122)"
		}
	}	
	useEffect(()=>{
		changeopacity()
		window.addEventListener("scroll", changeopacity)
		return ()=> window.removeEventListener('scroll', changeopacity)
	})
	const textHighlight = keyframes`
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	`
	const mainFont = 'Rubik';
	const HeadSection = styled.header`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 2vw;
		position: fixed;
		top: 0;
		z-index: 50;
		padding: 1rem;
		background-color: ${colors.blue};
		width: 100vw;
	`

	const List = styled.ul`
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-left: 2vw;
	`
	const ListElem = styled.li`
		font-weight: bold;
		margin: 0 1rem 0 0;
		list-style: none;
		font-family: ${mainFont};
		color: ${colors.white};
		position: relative;
		&:hover{
			&:after{
				content: '';
				width: 100%;
				height: 3px;
				position: absolute;
				left:0;
				bottom: -2px;
				background-color: ${colors.white};
				animation: ${textHighlight};
				animation
			}
		}
	`
	const Title = styled.h1`
		font-family: ${mainFont}; 
		font-size: 40px;
		color: ${colors.red};
	`
	
	return (
		<HeadSection id='headbar'>
			<Title>Foxnacity</Title>
			<List>
				{prop1 ? <ListElem>{prop1}</ListElem> : ''}
				{prop2 ? <ListElem>{prop2}</ListElem> : ''}
				{prop3 ? <ListElem>{prop3}</ListElem> : ''}
			</List>
		</HeadSection>
	);
}

export default Header