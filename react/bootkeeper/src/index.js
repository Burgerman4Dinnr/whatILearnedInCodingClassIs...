import ReactDOMClient from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from "./App"
import Expenses from "./components/Expenses"
import Invoice from "./components/Invoice"
import Invoices from "./components/Invoices"
const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='expenses' element={<Expenses />}></Route>
                <Route path='invoices' element={<Invoices />}>
                    <Route
                        index
                        element={
                            <main style={{padding: '1rem'}}>
                                <p>Select an Invoice</p>
                            </main>
                        }
                        />
                        <Route path=":invoiceId" element={<Invoice />} />
                </Route>
            </Route>
            <Route 
            path="*"
            element={
                <main style={{padding: '1rem'}}>
                    <p>There's nothing to see here</p>
                </main>
            }></Route>
        </Routes>
    </BrowserRouter>
)