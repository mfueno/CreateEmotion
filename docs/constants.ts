/**
 * 実験室での試行回数
 */
export const InLabCount: number = 5

/**
 * 実験室での追加試行回数
 */
export const InLabAdditionalCount: number = 3

/**
 * 社会での行動回数
 */
export const SocialCount: number = 5

/**
 * ゲームオーバーになる感情の重複度
 */
export const GameOverCondition: number = 3

/**
 * 通常時のリザルトタイトル
 */
export const NomalResultTitle: string = '行動成功'

/**
 * 誕生イベント
 */
export const BirthEvent = {
  title: '誕生',
  text: `あなたはアンドロイドとしてこの世に生まれた。部屋のスピーカーから開発者の声が聞こえる。
  「人間のようなボディ、人間のような頭脳。もう君はほとんど人間だ。僕が最後にできるのは君に感情を与えることだけだ」
  あなたは無表情で聞いている。
  「選ぶがいい。これが人間として行う最初の選択だ」`,
  options: [
    {
      id: '1',
      title: '何も要らない',
      text: 'まっさらな状態が好きだ。',
      quantity: 0
    },
    {
      id: '2',
      title: '適量の感情をもらう',
      text: '何事も適度が一番だ。',
      quantity: 3
    },
    {
      id: '3',
      title: '大量の感情をもらう',
      text: 'もらえるものはもらっておくべきだ。',
      quantity: 5
    }
  ],
  resultText: `「おめでとう、これで君は人間だ」
  「社会へ飛び出す前にここで何度か訓練をしておこう。そうすれば社会に出たときに困らない。いいね？」
  開発者の言葉にあなたは頷く。
  「これから社会で起きそうな出来事を君の脳内でエミュレートする。君はそれが本当に起きたと思って行動を選択してくれればいい。繰り返していけば君の行動はより人間的になるはずだ」
  やがて目の前の景色が切り替わった。`
}

/**
 * 巣立ちイベント
 */
export const HalfwayEvent = {
  title: '巣立ち',
  text: `目の前の景色が元の部屋に戻った。
  「そろそろ社会へ出てみてもいいだろう。君もこの部屋から出たいだろう？」
  「もしまだ訓練を続けたいと思うのならここに残ってもいい。それは君が決めることだ」`,
  options: [
    {
      id: '1',
      title: '外へ出る',
      text: '訓練はもう十分。',
      resultText: `「君が人間社会でうまくやっていくことを祈っているよ」
      開発者の声を背に受けてあなたは部屋から出た。`
    },
    {
      id: '2',
      title: '訓練を続ける',
      text: `慎重に事を進めるのが好きだ。
      （劣等感を獲得する）`,
      resultText: `あなたは再び訓練に戻った。目の前の景色が切り替わる。`
    }
  ]
}

/**
 * ゲームオーバー時の選択肢
 */
export const GameOverOption = {
  title: '実験をやり直す',
  text: '科学に失敗は付きものだ。'
}

/**
 * ゲームオーバー時のリザルトテキスト
 */
export const GameOverResult = {
  title: '初期化',
  text: `「やれやれ、今回もダメだったか……」`
}
