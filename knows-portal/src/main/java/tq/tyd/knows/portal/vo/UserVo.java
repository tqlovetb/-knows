package tq.tyd.knows.portal.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@Accessors(chain = true)
public class UserVo implements Serializable {
    private Integer id;
    private String username;
    private String nickname;

    // 问题数
    private int questions;
//    收藏数
    private int collections;

}
