package user.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import user.bean.UserImageDTO;

@Repository
@Transactional
public class UserUploadDAOMyBatis implements UserUploadDAO {
	@Autowired
	private SqlSession sqlSession;

//for 사용	
//	@Override
//	public void upload(List<UserImageDTO> userImageList) {
//		for(UserImageDTO userImageDTO : userImageList) {
//			sqlSession.insert("userUploadSQL.upload", userImageDTO);
//		}//for
//	}
	
//XML에서 <foreach> 사용할 때
	@Override
	public void upload(List<UserImageDTO> userImageList) {
		sqlSession.insert("userUploadSQL.upload", userImageList);
	}

	@Override
	public List<UserImageDTO> getUploadList() {
		return  sqlSession.selectList("userUploadSQL.getUploadList");
	}

}













