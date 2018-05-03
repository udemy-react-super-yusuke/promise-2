// 現在の時間を取得するための補助的な関数
const getSeconds = () => new Date().getSeconds();

// 非同期処理を Promise を使って読みやすく書く
const async1 = num => {
  // Promise オブジェクトを作ってこれを返す
  // Promise オブジェクトに、コールバックを登録する
  return new Promise((resolve, reject) => {
    // start
    console.log("start" + num, getSeconds());
    // delayed
    setTimeout(() => {
      console.log("done" + num, getSeconds());
      // 処理が終わる場所で、resolve を実行する
      // ここで渡した引数が、then が受け取る引数になる
      // (このコードでは result に入る)
      resolve(num);
    }, 1000);
  });
};

// promise オブジェクトを作って実行する
async1(1)
  .then(result => {
    // resolve がきたら、then に移動する
    // さらに promise オブジェクトを返すことで、
    // 次の then につなげていく
    return async1(result + 1);
  })
  .then(result => {
    return async1(result + 1);
  });
