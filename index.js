/*async function makeIssue() {
    const token = process.env.GH_TOKEN;
    // 요고 1
    const OWNER = "programers-AIBE1";
    // 요고 2
    const REPO = "250124";
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "숫자 뽑기",
            body: `${Math.floor(Math.random() * 100) + 1}`,
        })
    });
    if (response.ok) {
        console.log("success");
    } else {
        console.log("fail");
    }
}

makeIssue();*/
