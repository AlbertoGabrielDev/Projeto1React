import React from "react";
import './MenuLateral.css';


const MenuLateral = () =>{
    return(
        <>
            <header className="menu-lateral">
                <ul>
                    <li >Localidade</li>
                     <select className="selecao">
                        <option value="5" className="opcao">Goiânia</option>
                        <option value="6" className="opcao">Anápolis</option>
                        <option value="7" className="opcao">Rio Verde</option>
                     </select>
                           
                
                    <li>Seguro veicular</li>
                        <input type="radio" className="estilo-carro"/>
                        <label className="estilo-nome" >SIM</label>
                        <input type="radio" className="estilo-carro"/>
                        <label className="estilo-nome">NÃO</label>

                <li>Faixa de Preço</li>
                <input type="text" className="preco" />   
                
                <strong >Tipo de carro:   </strong>
                <button class="botao"> 4X4</button>    
                <button class="botao"> SUV</button>   
                <button class="botao"> Eletríco</button>    

                <li>KM rodado</li>
                        <input type="range" min="0" max="100" className="estilo" id="valor" 
                   />       

<               li>Marca</li>
                <select className="selecao">
                        <option value= "marca">volkswagen</option>
                        <option value= "marca">Honda</option>
                        <option value= "marca">Fiat</option>
                        <option value= "marca">Land Rover</option>
                        <option value= "marca">Mercedes</option>
                        <option value= "marca">lamborghini</option>
                </select>
                </ul>
                </header>
        </>
         
    )
    }
    export default MenuLateral;