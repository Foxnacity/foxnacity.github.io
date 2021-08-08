import React from 'react'
import './bigtext.scss'
import styled, {keyframes} from "styled-components";
import colors from '../styles/colors';
import ifEmoji from 'if-emoji'

const BigText = ({id}) => {
	
	const Nick = "FOXNACITY"
  	const nickname = [...Nick]
	
	const TextBackground = styled.div`
    	width: 100%;
    	height: 100vh;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		alight-content: center;
  	`
	
	const OnLoadHighligh = keyframes`
		from{
			width: 0%;
		}
		to {
			width: 100%;
		}
	`

	const IntroductionTitle = styled.h2`
		color: ${colors.white};
		position: relative;
		cursor: default;
		.emojiOn{
			color: ${colors.white};
			background: none;
			position: relative;
			&:before{
				content: '';
				height: 4px;
				width: 100%;
				position: absolute;
				bottom: -6px;
				left: 2px;
				background: ${colors.white};
				animation: ${OnLoadHighligh} 1s;
			}
			&:after{
				content: '';
				height: 4px;
				width: 100%;
				position: absolute;
				bottom: -4px;
				left: 0px;
				background: ${colors.red};
				animation: ${OnLoadHighligh} 1s;
			}
		}
		.emojiOff{
			color: ${colors.white};
			background: none;
			position: relative;
			&:before{
				content: '';
				height: 4px;
				width: 100%;
				position: absolute;
				bottom: -4px;
				left: 2px;
				background: ${colors.white};
				animation: ${OnLoadHighligh} 1s;
			}
			&:after{
				content: '';
				height: 4px;
				width: 100%;
				position: absolute;
				bottom: -2px;
				left: 0px;
				background: ${colors.red};
				animation: ${OnLoadHighligh} 1s;
			}
		}
	`

	const IntroductionContent = styled.p`
		color: ${colors.white};
		margin-top: 1rem;
		line-height: 1.5;
		cursor: default;
	`

	return(
		
		<TextBackground id={id}>
		  	<div className='image'>
		  		<div className="box">
		  			{
						nickname.map((letter) => {
						  return(
							<p className={`${letter}-letter letter`}>
							  {letter}
							</p>
						  )
						})
		  			}
				</div>
			</div>
		  	<div className='blankboard'>
				<div className="box2">
					{
						ifEmoji('🦄') 
						? 
						<IntroductionTitle>
							I'm <mark className="emojiOn">an 🦄</mark> FRONT-END Developer
						</IntroductionTitle> 
						:
						<IntroductionTitle>
							I'm <mark className="emojiOff">an unicorn</mark> FRONT-END Developer
						</IntroductionTitle>
					}
					<IntroductionContent>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</IntroductionContent>
				</div>
			</div>
		</TextBackground>
	)
}

export default BigText