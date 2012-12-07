javascript:
alert("githu部") ;









































/* 現在の日付を表示
var now ;
now = new Date() ;
alert(now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate()) ;
*/




// タスクのリストを取得。チャットワークのHTMLを調査

/* あれ取得出来ない？
/*
var now ;
var task_list ;

now = new Date() ;
	
	
task_list = document.getElementsByClassName('cw_task') ;
alert(task_list.length) ;
*/

/* 読み込みが終わっていないから。チャットワークはDOMオブジェクトを読み込み終わった後に要素を読み込んでいる
window.onload = function(){
	var now ;
	var task_list ;

	now = new Date() ;
	
	
	task_list = document.getElementsByClassName('cw_task') ;
	alert(task_list.length) ;
}
*/

/* タスクのDIVがとれているか確認
window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	now = new Date() ;
	
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		alert(task_list[ii].className) ;
	}
}
*/


/* とりあえず関数化
window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		isExpiration(now, task_list[ii]) ;
	}
	
}

function isExpiration(now, task) {
	alert(now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate()) ;
	alert(task.className) ;
	return(true) ;
}

*/

/* とりあえず日付近辺の文字列を取得
function isExpiration(now, task) {
	alert(task.childNodes[0].innerText) ;
	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		isExpiration(now, task_list[ii]) ;
	}
	
}
*/

/* そもそも期限がないタスクならfalse
function isExpiration(now, task) {
	var text ;

	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	
	alert(text) ;
	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		isExpiration(now, task_list[ii]) ;
	}
	
}
*/


/* 日付をパース
function isExpiration(now, task) {
	var text ;

	
	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	// memo: 
	//0番目が期限と日付と編集削除
	//1番目がメッセージの内容
	//2番目が追加時点へ移動
	
	alert(text.substring(3,7)) ;
	alert(text.substring(8,10)) ;
	alert(text.substring(11,12)) ;
	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		isExpiration(now, task_list[ii]) ;
	}
}
*/

/* 期限の日付オブジェクトを生成
function isExpiration(now, task) {
	var text ;
	var exp_date ;

	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	exp_date = new Date(text.substring(3,7), text.substring(8,10) - 1, text.substring(11,12)) ;
	alert(exp_date) ;
	
	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		isExpiration(now, task_list[ii]) ;
	}
}
*/

/* 期限切れ判定
function isExpiration(now, task) {
	var text ;
	var exp_date ;

	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	exp_date = new Date(text.substring(3,7), text.substring(8,10) - 1, text.substring(11,12)) ;
	if( exp_date > now ) {
		return(false) ;
	}

	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		if( isExpiration(now, task_list[ii]) ) {
			alert("期限が過ぎているまたは今日のタスクがある") ;
		}
	}
}
*/

/* タスクのメッセージを取得
function getTaskMessage(task) {
	alert(task.childNodes[1].innerText) ;
}
function isExpiration(now, task) {
	var text ;
	var exp_date ;

	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	exp_date = new Date(text.substring(3,7), text.substring(8,10) - 1, text.substring(11,12)) ;
	if( exp_date > now ) {
		return(false) ;
	}

	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		if( isExpiration(now, task_list[ii]) ) {
			getTaskMessage(task_list[ii]) ;
		}
	}
}
*/

/* 整形して表示
function getTaskMessage(task) {
	return(task.childNodes[1].innerText) ;
}

function isExpiration(now, task) {
	var text ;
	var exp_date ;

	text = task.childNodes[0].innerText ;
	if( text.indexOf('期限') < 0 ) {
		return(false) ;
	}
	exp_date = new Date(text.substring(3,7), text.substring(8,10) - 1, text.substring(11,12)) ;
	if( exp_date > now ) {
		return(false) ;
	}

	return(true) ;
}

window.onload = function(){
	var now ;
	var task_list ;
	var ii ;
	var alert_msg ;
	
	now = new Date() ;
	task_list = document.getElementsByClassName('cw_task') ;
	for( ii = 0 ; ii < task_list.length ; ii++ ) {
		if( isExpiration(now, task_list[ii]) ) {
			alert_msg = "以下のタスクが今日まで又は期限切れです\r\n" ;
			alert_msg += "------------------------------------------\r\n" ;
			alert_msg += getTaskMessage(task_list[ii]) ;
			
			alert(alert_msg) ;
		}
	}
}
*/
