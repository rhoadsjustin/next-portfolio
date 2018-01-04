import Navbar from './Navbar'

const layoutStyle = {
    margin: 20,
    padding: 20, 
    border: '1px solid #DDD'
}
const childrenStyle = {
    display: 'flex',
    justifyContent: 'center'
}
const Layout = (props) => (
    <div style={layoutStyle}>
        <Navbar />
        <div style={childrenStyle}>
            {props.children}
        </div>
    </div>
)

export default Layout