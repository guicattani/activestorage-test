import React  from "react"
import VideoForm from "../VideoForm";
import { render, screen, cleanup } from "@testing-library/react"
import renderer from 'react-test-renderer'


// Add the List Component Cleanup after every test
afterEach(()=> {
  cleanup();
})

test('should render video form component', ()=> {
  render(<VideoForm />)  
  const videoElement = screen.getByTestId("video-form");
  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveLength(4)
})

test('matches the snapshot', ()=> {
  const tree = renderer.create(<VideoForm />)
  expect(tree).toMatchSnapshot();
})