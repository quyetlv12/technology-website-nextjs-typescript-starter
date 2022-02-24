import Tables from "../../../components/molecules/admin/table/Tables";

const News = () => {
    const field = ['hình ảnh','Tiêu đề bài viết','Nội dung','Người viết','Ngày tạo','Hành động']
    return (
        <div>
            <Tables thProps={field} dataProps={[]}/>
        </div>
    );
}

export default News;