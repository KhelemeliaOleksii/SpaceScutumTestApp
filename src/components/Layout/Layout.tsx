// import { Outlet } from "react-router-dom"
import { Container } from 'src/components/Container'
import NotifyContainer from 'src/components/NotifyContainer/NotifyContainer'
import TodosView from 'src/views/TodosView'
// import { AppBar } from "../AppBar/AppBar"

export const Layout = () => {
    return (
        <>
            <Container>
                {/* <AppBar /> */}
                {/* <Outlet /> */}
                <TodosView />
                <NotifyContainer />
            </Container>
        </>
    )
}
