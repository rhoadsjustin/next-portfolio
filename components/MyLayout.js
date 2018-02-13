import Navbar from './Navbar'

const layoutStyle = {
    margin: 20,
    padding: 20, 
    border: '1px solid #DDD',
}
const childrenStyle = {
    display: 'flex',
    justifyContent: 'center'
}
const Layout = (props) => (
    <div style={layoutStyle} className="mainApp">
        <Navbar />
        <div style={childrenStyle}>
            {props.children}
        </div>
    <style jsx>{`
    div {
        background: url('../static/bg.png');
        background-size: 100%;
    }
    `}</style>
    </div>

)

export default Layout