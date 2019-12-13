
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 80vw;
    margin: 110px auto;
    @media (max-width: 600px){
        margin: 40px auto;
        width: 100%;
        padding: 4px;
        div{
            padding: 20px;
            overflow-x:scroll;
            flex-wrap: nowrap;
        }
    }
`;

var topSizeGuide = [
    {Size:'S', EU:'46', UKUS:'36', Chestcm:'100', Collarcm:'38', Collarin:'15',},
    {Size:'M', EU:'48', UKUS:'38', Chestcm:'105', Collarcm:'39', Collarin:'15.5',},
    {Size:'L', EU:'50', UKUS:'40', Chestcm:'110', Collarcm:'40', Collarin:'16',},
    {Size:'XL', EU:'52', UKUS:'42', Chestcm:'115', Collarcm:'41', Collarin:'16.5',},
]
var bottomSizeGuide = [
  {Size:'S', Waistin:'30-31', Waistcm:'76-79', innerLegLength:'83', EU:'46',},
  {Size:'M', Waistin:'32-33', Waistcm:'81-84', innerLegLength:'84', EU:'48',},
  {Size:'L', Waistin:'34-35', Waistcm:'86-89', innerLegLength:'85', EU:'50',},
  {Size:'XL', Waistin:'36-37', Waistcm:'91-94', innerLegLength:'86', EU:'52',},
]



const lookbook = () => (
  <Layout>
    <SEO title="Size Guides" />
    <br/>

    <Wrapper>
        <h1>Size Guide:</h1>
        <h2>Tops</h2>
        <p><b>Tops:</b> T-shirts & Singlets, Shirts & Polos, Coats & Jackets, Jumpers & Cardigans, Sweats & Hoodies, Base Layers, Sleepwear Top </p>
        {/* <Table data={sizeGuide}/> */}
        <div>
        <table>
             <tr><td>SIZE INTL.</td><td>EU</td><td>UK/US</td><td>Chest(cm)</td><td>Collar(cm)</td><td>Collar(in)</td></tr>
                {topSizeGuide.map(row => (
                    <tr>
                        <td key={row.Size}>{row.Size}</td>
                        <td key={row.EU}>{row.EU}</td>
                        <td key={row.UKUS}>{row.UKUS}</td>
                        <td key={row.Chestcm}>{row.Chestcm}</td>
                        <td key={row.Colarcm}>{row.Collarcm}</td>
                        <td key={row.Colarcm}>{row.Collarin}</td>
                    </tr>
                ))}
        </table>
        </div>
        <br></br>
        <h2>Bottoms</h2>
        <p><b>Bottoms:</b> Pants, Jeans, Shorts, Sleepwear Bottom, Underwear </p>
        <div>
        <table>
            <tr><td>SIZE INTL.</td><td>Denim/Pant Waist (in)</td><td>Waist(cm)</td><td>Pants Inner Leg Length (cm)</td><td>EU</td></tr>
                {bottomSizeGuide.map(row => (
                    <tr>
                        <td key={row.Size}>{row.Size}</td>
                        <td key={row.Waistin}>{row.Waistin}</td>
                        <td key={row.Waistcm}>{row.Waistcm}</td>
                        <td key={row.innerLegLength}>{row.innerLegLength}</td>
                        <td key={row.EU}>{row.EU}</td>
                    </tr>
                ))}
        </table>
        </div>
    </Wrapper>


</Layout>
)

export default lookbook