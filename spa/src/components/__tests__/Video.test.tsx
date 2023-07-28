import React  from "react"
import { render, screen, cleanup } from "@testing-library/react"
import renderer from 'react-test-renderer'
import Video from "../Video"

afterEach(()=> {
    cleanup();
})

const videoTestProps = { url:  'https://www.caspar-health.com', title: "shoulder exercise" }


test('should render video component', ()=> {
    render(<Video video= {videoTestProps}/>)  
}) 


test('matches the snapshot', ()=> {
    const tree = renderer.create(<Video video={videoTestProps} />)
    expect(tree).toMatchSnapshot();
})