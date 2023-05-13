import { Table, Tag } from "antd";
import './TransactionTable.css'
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
    },
    {
        title: "Status",
        key: "Status",
        dataIndex: "Status",
        render: (_, { Status }) => (
            <>
                {Status.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "Deposited") {
                        color = "green";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    
];
const data = [
    {
        key: "1",
        name: "John Brown",
        Date: "2022-03-25",
        Amount: "$80.05",
        Status: ["Deposited"],
    },
    {
        key: "2",
        name: "Jim Green",
        Date: "2022-03-25",
        Amount: "$4.05",
        Status: ["Deposited"],
    },
    {
        key: "3",
        name: "Joe Black",
        Date: "2022-03-25",
        Amount: "$120.05",
        Status: ["Deposited"],
    },
];
const TransactionTable = () => {
    return (
        <>
            <div className="transactionTable">
                <div className="tableTitle">
                    <span className="heading">Transaction</span>
                    <input type="search" placeholder="Search for anything..."/>
                </div>
                <div className="tableStart">
                    <Table columns={columns} dataSource={data} className="table" />
                </div>
            </div>
        </>
    )
}

export default TransactionTable;
