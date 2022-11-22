import request from "@/utils/request";

export function getAllnotes(data){
    return request({
        url:'http://119.23.243.88:8888/getAllnotes',
        method:'get',
        params:data
    })
}
export function getNoteContent(data){
    return request({
        url:'http://119.23.243.88:8888/getnotecontent',
        method:'get',
        params:data
    })
}
export function deletenote(data){
    return request({
        url:'http://119.23.243.88:8888/delnote',
        method:'get',
        params:data
    })
}
export function uploadimage(data){
    return request({
        url:'http://119.23.243.88:8888/uploadimage',
        method:'post',
        headers:{'Content-Type':'multipart/form-data'},
        files:data
    })
}
export function submitcontent(data){
    return request({
        url:'http://119.23.243.88:8888/submitcontent',
        method:'post',
        data:data
    })
}
export function addnote(data){
    return request({
        url:'http://119.23.243.88:8888/addnote',
        method:'post',
        data:data
    })
}
