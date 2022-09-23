import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react' 
import PokeCard from '../components/pokemon/PokeCard';
  

it('Shows pokemon name', () => {
  render( <PokeCard pokemon={{name:"zakaria", url:"www.devzac.com" , color:"#000000" }} />)
  expect(screen.getByRole('pokemon_name')).toHaveTextContent("zakaria")
})
 
 
