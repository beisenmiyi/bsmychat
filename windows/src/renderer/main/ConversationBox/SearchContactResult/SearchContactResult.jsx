export default function SearchContactResult({ searchContactResultData }) {
    // searchContactResultData = {
    //     "username": "test",
    //     "nickname": "test"
    // }
    return (<>
        <div>昵称：{searchContactResultData.nickname}</div>
        <div>用户名：{searchContactResultData.username}</div>
    </>)
}