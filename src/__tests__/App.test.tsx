import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from "../App";
import { Provider } from "react-redux";
import store from "../store"; 
 
 
it('renders Pokemons in page header', () => {
  render( <Provider store={store}><App /></Provider>)
  expect(screen.getByText('Pokemons')).toBeInTheDocument()
})

