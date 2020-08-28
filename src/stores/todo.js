import { observable, action } from 'mobx';
import * as api from '../lib/api';

export default class PostStore {
  @observable.ref todoList = [];
  @observable tagList = []; //Tga 셀렉트에 담을때 사용
  @observable tagName = '전체'; // 완료 Hash 태그 선택
  @observable loginToggle = true; // 로그인 창 Toggle

  constructor(root) {
    this.root = root;

    this.actTodoList();
  }

  // 읽기
  @action
  actTodoList = async () => {
    this.root.common.subLoading = true;

    try {
      const response = await api.todoList();
      const data = response.data;
      // const dataAdd = data.map((info) => {
      //   return (info = {
      //     ...info,
      //     todoControle: false,
      //   });
      // });

      const tag = data.map((info) => info.tags);
      const tagChoice = Array.from(new Set(tag)).sort();

      this.todoList = data;
      this.tagList = tagChoice;
    } catch (e) {
      console.log('Error: 읽기에 실패했습니다.');
    }
    this.root.common.subLoading = false;
  };

  // 쓰기
  @action
  actTodoWrite = async (inputValue, tagValue) => {
    const writeDdata = JSON.stringify({
      subject: inputValue,
      tags: tagValue,
      important: false,
      btnTodo: true,
      btnConfirm: false,
      btnComplete: false,
    });

    try {
      await api.todoWrite(writeDdata).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 쓰기에 실패했습니다.');
    }
  };

  // 삭제
  @action
  actTodoDelete = async (id) => {
    try {
      await api.todoDelete(id).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 삭제에 실패했습니다.');
    }
  };

  // 코멘트 관련
  // 코멘트 쓰기
  @action
  actTodoPatch = async (id, value) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const selected = this.todoList[index];
    const selectedItem = selected.comments;

    if (!selected) {
    } else {
      let patchDdata = JSON.stringify({
        comments: [...selectedItem, { comment: value }],
      });

      try {
        await api.todoPatch(id, patchDdata).then(this.actTodoList());
      } catch (e) {
        console.log('Error: 코멘트 쓰기에 실패했습니다.');
      }
    }
  };
  // 코멘트 리스트 삭제
  @action
  actSubListPatch = async (id, subId) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const selected = this.todoList[index];
    const selectedItem = selected.comments.findIndex(
      (info) => info._id === subId
    );
    let selectedComments = this.todoList[index].comments;
    selectedComments.splice(selectedItem, 1);

    if (!selected) {
      console.log('잘못 된 데이터입니다.');
    } else {
      let patchDdata = JSON.stringify({
        comments: [...selectedComments],
      });

      try {
        await api.todoPatch(id, patchDdata).then(this.actTodoList());
      } catch (e) {
        console.log('Error: 코멘트 삭제에 실패했습니다.');
      }
    }
  };
  // 코멘트 리스트 수정
  @action
  actCommentPatch = async (value, id, subId) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const list = this.todoList[index].comments;
    const listIndex = list.findIndex((info) => info._id === subId);
    let listObj = list[listIndex];
    listObj.comment = value;

    let patchDdata = JSON.stringify({ comments: list });
    try {
      await api.todoPatch(id, patchDdata).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 코멘트 수정에 실패했습니다.');
    }
  };

  // 중요 체크
  @action
  actImportantCheck = async (id) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const list = this.todoList[index];
    list.important = !list.important;

    try {
      await api.todoPatch(id, list).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 중요체크 수정에 실패했습니다.');
    }
  };

  // '할일' 목록으로 넘기기
  @action
  actTodo = async (id) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const list = this.todoList[index];
    list.btnTodo = true;
    list.btnConfirm = false;
    list.btnComplete = false;

    try {
      await api.todoPatch(id, list).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 할일 목록 수정에 실패했습니다.');
    }
  };
  // '확인' 목록으로 넘기기
  @action
  actConfirm = async (id) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const list = this.todoList[index];
    list.btnTodo = false;
    list.btnConfirm = true;
    list.btnComplete = false;

    try {
      await api.todoPatch(id, list).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 확인 목록 수정에 실패했습니다.');
    }
  };
  // '완료' 목록으로 넘기기
  @action
  actComplete = async (id) => {
    const index = this.todoList.findIndex((info) => info._id === id);
    const list = this.todoList[index];
    list.btnTodo = false;
    list.btnConfirm = false;
    list.btnComplete = true;
    list.completeDate = Date.now();

    try {
      await api.todoPatch(id, list).then(this.actTodoList());
    } catch (e) {
      console.log('Error: 완료 목록 수정에 실패했습니다.');
    }
  };

  // 완료 Hash 태그 선택
  @action
  actTagName = (value) => {
    this.tagName = value;
  };

  // 로그인
  @action
  actAuthLogin = async () => {
    const loginData = JSON.stringify({
      email: '2@2.com',
      password: '2',
    });

    try {
      await api.authLogin(loginData);
    } catch (e) {
      console.log('Error: 로그인에 실패했습니다.');
    }
  };
  // 로그인 체크
  @action
  actAuthCheck = async () => {
    try {
      const response = await api.authCheck();

      console.log(response.data);
    } catch (e) {
      // this.loginToggle = false;
      console.log('Error: 로그인 체크에 실패했습니다.');
    }
  };
  // 로그아웃
  @action
  actAuthLogout = async () => {
    try {
      await api.actAuthLogout();
    } catch (e) {
      console.log('Error: 로그아웃에 실패했습니다.');
    }
  };
}
