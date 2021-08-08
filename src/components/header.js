import styled from "styled-components"
import colors from "../styles/colors";
import {useEffect} from 'react'

function Header({prop1, prop2, prop3}) {

	function changeopacity(){
		let x = window.matchMedia('(min-width:1024px)')
		const headbar = document.querySelector('#headbar')
		if(x.matches){
			const win = window.scrollY
			const val = (0+(win/900))
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

	const mainFont = 'Rubik'

	const HeadSection = styled.header`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 2vw;
		position: fixed;
		top: 0;
		z-index: 50;
		padding: 1rem 2rem;
		background-color: ${colors.blue};
		width: 100vw;
	`

	const List = styled.ul`
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	`

	const ListElem = styled.li`
		margin: 0 1rem 0 1rem;
		list-style: none;
		font-family: ${mainFont};
		color: ${colors.white};
		position: relative;
		cursor: pointer;
		a{
			color: ${colors.white};
			text-decoration: none;
		}
		&:after{
				content: '';
				width: 0%;
				height: 3px;
				position: absolute;
				left:0;
				bottom: -2px;
				background-color: ${colors.white};
				transition: 0.3s;
		}
		&:hover{
			&:after{
				width: 100%;
			}
		}
	`

	const Title = styled.h1`
		font-family: ${mainFont}; 
		font-size: 40px;
		color: ${colors.yellow};
		cursor: default;
		text-transform: uppercase;
	`
	const slug1 = prop1 ? prop1.toLowerCase() : ''
	const slug2 = prop2 ? prop2.toLowerCase() : ''
	const slug3 = prop3 ? prop3.toLowerCase() : ''
	return (
		<HeadSection id='headbar'>
			<Title>Foxnacity</Title>
			<List>
				{prop1 ? <ListElem><a href={`#${slug1}`}>{prop1}</a></ListElem> : ''}
				{prop2 ? <ListElem><a href={`#${slug2}`}>{prop2}</a></ListElem> : ''}
				{prop3 ? <ListElem><a href={`#${slug3}`}>{prop3}</a></ListElem> : ''}
			</List>
		</HeadSection>
	);
}

export default Header