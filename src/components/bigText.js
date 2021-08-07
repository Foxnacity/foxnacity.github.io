import React from 'react'
import './bigtext.scss'
import styled from "styled-components";

const BigText = () => {
	
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

	return(
		
		<TextBackground>
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
		  	<div className='blankboard' />
		</TextBackground>
	)
}

export default BigText