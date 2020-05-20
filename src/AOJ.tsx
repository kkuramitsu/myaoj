import React from "react";
import axios from "axios";

import Problem from "./Problem";
import { Problems } from './problems'

// const COMPILEERROR = 0
// const WRONGANSWER = 1
// const TIMELIMIT = 2
// const MEMORYLIMIT = 3
const ACCEPTED = 4
// const WAITING = 5
// const OUTPUTLIMIT = 6
// const RUNTIMEERROR = 7
const PRESENTATIONERROR = 8
//const STATE_RUNNING = 9

const GREEN = '#b3d3ac';
const YELLOW = '#f9e697';
const RED = '#e2b2c0';

const colors = (status: number, prev?: string) => {
  if (status === ACCEPTED || prev === GREEN) {
    return GREEN;
  }
  if (status === PRESENTATIONERROR || prev === YELLOW) {
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
  score = '';
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
    var submit = 0;
    var prevId = '';
    for (const d of data) {
      if (d.language !== 'Python3') continue;
      if (d.submissionDate < 1587915078539) {
        continue
      }
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
      if (prevId !== d.problemId) {
        submit += 1;
      }
      prevId = d.problemId;
    }
    //console.log(data);
    if (dd.length > 0) {
      sessionStorage.setItem('aoj_uname', this.state.uname);
    }
    var excellent = 0, good = 0, failed = 0;
    for (const pid of Object.keys(this.pdb)) {
      const entry = this.pdb[pid];
      if (entry.color === GREEN) {
        excellent += 1;
      }
      else if (entry.color === YELLOW) {
        good += 1;
      }
      else {
        failed += 1;
      }
    }
    //this.score = `○ ${excellent} △ ${good} SCORE: ${(excellent + (good * 0.8) + (submit * 0.4)) | 0}`
    this.score = ''
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
    var count = 1;
    for (const p of Problems) {
      if (!p.id) {
        ps.push({
          title: p.title,
        })
        continue;
      }
      const item: any = {
        key: p.id,
        title: `(${count}) ${p.title}`,
        color: 'white',
        record: p.hint || '',
      }
      count += 1;
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
          <span id='score'>{this.score}</span>
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