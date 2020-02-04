import React from "react";
import axios from "axios";

import Problem from "./Problem";

const Problems = [
  { title: '文法' },
  { id: 'ITP1_1_A', title: 'Hello, World' },
  { id: 'ITP1_1_B', title: 'xの3乗' },
  { id: 'ITP1_1_C', title: '長方形の面積と周の長さ' },
  { id: 'ITP1_1_D', title: '時計' },
  { id: 'ITP1_2_A', title: '大小関係' },
  { id: 'ITP1_2_B', title: '範囲' },
  { id: 'ITP1_2_C', title: '3つの数の整列' },
  { id: 'ITP1_2_D', title: '長方形の中の円' },
  { id: 'ITP1_3_A', title: '複数のHelloWorldの出力' },
  { id: 'ITP1_3_B', title: 'テストケースの出力' },
  { id: 'ITP1_3_C', title: '2つの数の交換' },
  { id: 'ITP1_3_D', title: '約数の数' },
  { id: 'ITP1_4_A', title: 'A/B Problem(割り算)' },
  { id: 'ITP1_4_B', title: '円の面積と円周' },
  { id: 'ITP1_4_C', title: '簡単な計算機' },
  { id: 'ITP1_4_D', title: '最小値、最大値、合計値' },
  { id: 'ITP1_5_A', title: '長方形の描画' },
  { id: 'ITP1_5_B', title: 'フレームの描画' },
  { id: 'ITP1_5_C', title: 'チェスボードの描画' },
  //  { id: 'ITP1_5_D', title: '約数の数' },

  { id: 'ITP1_6_A', title: '数列の反転' },
  { id: 'ITP1_6_B', title: '不足しているカードの発見' },
  //{ id: 'ITP1_6_C', title: '公舎の入居者数' },
  //{ id: 'ITP1_6_D', title: 'ベクトル積' },

  { id: 'ITP1_7_A', title: '成績' },
  { id: 'ITP1_7_B', title: '組み合わせの数' },
  { id: 'ITP1_7_C', title: '表計算' },

  //{ id: 'ITP1_7_D', title: '行列積' },

  { id: 'ITP1_8_A', title: '大文字と小文字の入れ替え' },
  { id: 'ITP1_8_B', title: '数字の和' },
  { id: 'ITP1_8_C', title: '文字のカウント' },
  { id: 'ITP1_8_D', title: 'リング' },


  { id: 'ITP1_9_A', title: '単語の検索' },
  { id: 'ALDS1_14_A', title: '文字列の探索' },

  { id: 'ITP1_9_B', title: 'シャッフル' },
  { id: 'ITP1_9_C', title: 'カードゲーム' },
  { id: 'ALDS1_4_C', title: '辞書' },

  //{ id: 'ITP1_9_D', title: '文字列変換' },

  { id: 'ALDS1_10_C', title: '最長共通部分列(LCS)' },
  { id: 'ALDS1_10_A', title: 'フィボナッチ数列' },
  { id: 'NTL_1_A', title: '素因数分解' },
  { id: 'NTL_1_B', title: 'べき乗' },
  { id: 'NTL_1_C', title: '最小公倍数' },


  { id: 'NTL_1_D', title: 'オイラーのφ関数' },



  { id: 'ITP1_10_A', title: '距離' },
  { id: 'ITP1_10_B', title: '三角形' },
  { id: 'ITP1_10_C', title: '標準偏差' },
  { id: 'ITP1_10_D', title: 'リミンコフスキー距離' },

  // アルゴリズム
  { id: 'ALDS1_1_B', title: '最大公約数(典型問題)' },
  { id: 'ALDS1_1_C', title: '素数(典型問題)' },
  { id: 'ALDS1_1_D', title: '最大の利益' },

  { id: 'ALDS1_3_A', title: '逆ポーランド記法（典型問題）' },
  { id: 'ALDS1_3_B', title: 'ラウンドロビン（キュー）' },
  { id: 'ALDS1_4_A', title: '線形探索(典型問題)' },
  { id: 'ALDS1_4_B', title: '二分探索(典型問題)' },
  { id: 'ALDS1_4_D', title: '最大積載量(Allocation)' },

  { id: 'ALDS1_3_D', title: '洪水の被害状況' },
  { id: 'ALDS1_5_A', title: '総当たり' },

  { id: 'ALDS1_5_B', title: 'コッホ曲線(典型問題)' },
  { id: 'ALDS1_13_A', title: '８クイーン問題(典型問題)' },

  { id: 'ALDS1_13_B', title: '８パズル(典型問題)' },

  { id: '0009', title: '素数の数' },
  { id: '0197', title: 'ユークリッドの互除法' },
  { id: '1200', title: 'ゴールドバッハの予想' },
  { id: '0014', title: '数値積分' },
  { id: '0004', title: '連立方程式' },
  { id: '0080', title: '3乗根' },
  { id: '2220', title: '根の個数' },

  { id: '0084', title: 'サーチエンジン', cite: 'PCK2005', hint: '文字列の長さは？' },
  { id: '0006', title: '文字列反転', cite: 'PCK2003', hint: 'メソッドを調べてみて' },
  { id: '1042', title: 'Yes, I have a number', cite: 'UAPC2009)', hint: '日本人には無理だね' },
  { id: '1044', title: 'CamlCase', cite: 'UPAC2009', hint: '変数名をつける流儀' },
  { id: '0522', title: 'JOIとIOI', cite: '情報オリンピック2007', hint: '少し頭を使います' },
  { id: '0063', title: '回文', cite: 'PCK2004', hint: 'スタックを使う典型問題だが..' },
  { id: '0512', title: 'カイザー暗号', cite: 'JOI2006', hint: '暗号アルゴリズムの基礎' },
  { id: '0029', title: '英語の文章', cite: 'PCK2004', hint: '辞書の練習' },
  { id: '0050', title: 'りんごともも', cite: 'PCK2004', hint: '便利なメソッドを探してください' },
  { id: '0064', title: '秘密の番号', cite: 'PCK2004', hint: '正規表現を試してみると' },
  { id: '0176', title: '何色？', cite: 'PCK2008', hint: '実用的なよい問題' },
  { id: '0287', title: '塵劫記', cite: 'PCK2013', hint: '実用的なよい問題' },
  { id: '0109', title: 'スマート計算機', cite: 'PCK2005', hint: '構文解析の入門と卒業' },

  { id: '0506', title: '文字列', cite: 'JOI2005', hint: 'もうパズル' },
  { id: '0040', title: 'アフィン暗号', cite: 'PCK2004', hint: '有名な暗号アルゴリズム' },
  { id: '0077', title: 'ランレングス', cite: 'PCK2005', hint: '有名な圧縮アルゴリズム' },


  { id: 'DPL_1_B', title: '0-1ナップサックの問題' },
  { id: 'DPL_1_A', title: 'コインの問題' },
  { id: '0168', title: '観音堂' },

  { id: '0025', title: 'Hit and Blow(PCK 2003)' },
  { id: '2406', title: 'アルデンテ(KUPC2012)' },
  { id: '2271', title: 'KUPC (KUPC2011) ' },
  { id: '2522', title: 'パスワードの安全性 (UECPC2013)' },
  { id: '2772', title: 'マイナンバー(HUPC2016)' },


  { id: '2331', title: '友達の誘い方(JAG2010)' },

  { id: '1147', title: 'ICPC 得点集計ソフトウェア	国内予選2007A' },
  { id: '1153', title: '等しい合計点	国内予選2008A' },
  { id: '2197', title: '連続する整数の和	模擬国内2010A' },
  { id: '1192', title: '税率変更 (☆)	国内予選2014A' },
  { id: '1616', title: '太郎君の買物	国内予選2017A' },
  { id: '1624', title: '所得格差	国内予選2018A' },

  { id: '1172', title: 'チェビシェフの定理	国内予選2011A' },
  { id: '1173', title: '世界の天秤	国内予選2011B' },
  { id: '1165', title: '角角画伯，かく悩みき	国内予選2010A' },
  { id: '1141', title: 'ディリクレの算術級数定理	国内予選2006A' },
  { id: '1142', title: '列車の編成パートII (☆)	国内予選2006B' },
  { id: '1601', title: '短句	国内予選2015B' },
  { id: '1609', title: '当選者を探せ！	国内予選2016B' },
  { id: '1186', title: '整長方形 国内予選2013A' },

  { id: '1130', title: 'Red and Black	国内予選2004B' },
  { id: '1160', title: '島はいくつある？	国内予選2009B' },
  { id: '1193', title: '連鎖消滅パズル	国内予選2014B' },
  { id: '1610', title: '竹の花 (☆)	国内予選2016C' },
  { id: '2013', title: '大崎 (☆)	模擬国内2007B' },
  { id: '1626', title: '超高層ビル「みなとハルカス」	国内予選2018C' },
  { id: '1167', title: 'ポロック予想	国内予選2010C' },
  { id: '1625', title: '折り紙	国内予選2018B' },
  { id: '1161', title: '覆面算 (☆☆)	国内予選2009C' },
  { id: '1611', title: 'ダルマ落とし (☆☆)	国内予選2016D' },
  { id: '1131', title: 'Unit Fraction Partition	国内予選2004C' },
  { id: '1194', title: 'バンパイア (☆)	国内予選2014C' },
  { id: '1144', title: 'カーリング 2.0	国内予選2006D' },
  { id: '1156', title: 'ちょろちょろロボット (☆)	国内予選2008D' },


]


const COMPILEERROR = 0
const WRONGANSWER = 1
const TIMELIMIT = 2
const MEMORYLIMIT = 3
const ACCEPTED = 4
const WAITING = 5
const OUTPUTLIMIT = 6
const RUNTIMEERROR = 7
const PRESENTATIONERROR = 8
const STATE_RUNNING = 9

const GREEN = 'lightgreen';
const YELLOW = 'lightred';
const RED = 'lightred';

const colors = (status: number, prev?: string) => {
  if (status === 4 || prev === GREEN) {
    return GREEN;
  }
  if (status === 7 || prev === YELLOW) {
    return YELLOW;
  }
  return RED;
}

const StatusIcons = [
  '😭', '😡', '😱', '😱', '🍺',
  '⚡️', '⚡️', '😨', '😓', '⚡️',
]

const records = (status: number, prev = '') => {
  return StatusIcons[status] + prev;
}

const uname = () => {
  return sessionStorage.getItem('aoj_uname') || '';
}


type AOJState = {
  uname: string
  msgList: any[]
}

class AOJ extends React.Component<any, AOJState> {
  pdb: any;
  constructor(props: any) {
    super(props);
    this.state = {
      uname: uname(),
      msgList: []
    };
    this.pdb = {}
  }

  check(data: any[]) {
    this.pdb = {}
    const dd = []
    for (const d of data) {
      if (d.language !== 'Python3') continue;
      if (d.status !== 4 && !d.accuracy.startsWith('0')) {
        d.status = PRESENTATIONERROR;
      }
      dd.push({
        'key': d.judgeId,
        'problemId': d.problemId,
        'time': d.submissionDate,
        'status': d.status,
        'message': `${d.problemId} ${new Date(d.submissionDate)}`
      })
      this.solved(d);
    }
    console.log(data);
    if (dd.length > 0) {
      sessionStorage.setItem('aoj_uname', this.state.uname);
    }
    return dd;
  }

  solved(d: any) {
    if (d.problemId in this.pdb) {
      const entry = this.pdb[d.problemId];
      entry.color = colors(d.status, entry.color);
      entry.record = records(d.status, entry.record);
    }
    else {
      const entry = {
        problemId: d.problemId,
        color: colors(d.status),
        record: records(d.status),
        date: new Date(d.submissionDate / 1000),
      }
      this.pdb[d.problemId] = entry;
    }
  }

  solvedList(): any[] {
    const ps = []
    for (const p of Problems) {
      if (!p.id) {
        ps.push({
          title: p.title,
        })
        continue;
      }
      const item: any = {
        key: p.id,
        title: `${ps.length + 1}. ${p.title}`,
        color: 'white',
        record: ''
      }
      if (p.id in this.pdb) {
        const entry = this.pdb[p.id];
        item.color = entry.color;
        item.record = entry.record;
      }
      console.log(item);
      ps.push(item)
    }
    return ps;
  }


  handleClick = () => {
    axios
      //.get("https://api.myjson.com/bins/mt9wv")
      .get(`https://judgeapi.u-aizu.ac.jp/submission_records/users/${this.state.uname}?size=2000`)
      .then(res => this.setState({ msgList: this.check(res.data) }))
      .catch(err => alert(err));
  };

  private handleOnChange(e: any): void {
    this.setState({ uname: e.target.value });
  }

  public render() {
    return (
      <>
        <p>ユーザ名 <input type="text" value={this.state.uname}
          onChange={e => this.handleOnChange(e)} />
          <button onClick={this.handleClick}>チェック</button>
        </p>
        {this.solvedList().map(val => {
          if (!val.key) {
            return <h2>{val.title}</h2>
          }
          else {
            return <Problem key={val.key}
              problem={val.key}
              color={val.color}
              record={val.record}>
              {val.title}
            </Problem>
          }
        })}
      </>
    );
  }
}

export default AOJ;