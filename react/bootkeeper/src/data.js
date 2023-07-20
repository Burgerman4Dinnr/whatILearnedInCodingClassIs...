let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,000",
        due: "12/05/1995"
    },

    {
        name:"Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,000",
        due: "01/17/1998"
    }
]

export function getInvoices() {
    return invoices
}

export const getInvoice =(number)=> {
    return invoices.find(invoice => invoice.number === number)
}

export const deleteInvoice =(number)=> {
    invoices = invoices.filter(invoice => invoice.number !== number)
}