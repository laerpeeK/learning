关系型数据库本质上是指：这类数据库有多张表，通过关系彼此关联。

关系型数据库每张表有一个主键列，列中的值要能够唯一识别表里的记录。





### **查**

USE: 选择数据库

SELECT： 选项 AS 别名

FROM：表

WHERE: 判断 

  * = > <
  *  LIKE: 
        	* %any number of char
                	* _ single char
                        	* AND, OR,  IN,  NOT IN
                        	* BETWEEN  AND
                                	* REGEXP
                                	* IS NOT NULL

ORDER BY： 排序 DESC降序

LIMIT: offset, num

JOIN 表 ON 条件 (简写)

内连接： 数据库内不同表的连接 

跨数据库连接： 不是当前环境使用的数据库，表前缀要加数据库名

自连接： 给表取不同名字

多表连接：多个JOIN ON

复合连接条件：JOIN ON AND

隐式连接：FROM tableA , tableB WHERE condition

外连接：LEFT/RIGHT JOIN ON

多表外连接：多个LEFT JOIN  ON

自外连接：外连接时连接自身

USING： JOIN USING（）

自然连接：NATURAL JOIN

交叉连接：CROSS JOIN 每项连接多项

UNIONS：用于合并两个或多个 SELECT 语句的结果集



### 增：

插入单行：INSERT INTO （）

VALUES（）

插入多行：INSERT INTO table ()

VALUES (),

​			()

插入分层行：

​	INSERT INTO table

​	VALUES(),()

创建表复制：

​	INSERT INTO table

​	SELECT 

   FROM table

​	WHERE



### 改：

UPDATE table

SET a = xxx,b = ccc

WHERE 



### 删：

子查询是在另一端SQL语句里的选择语句

DELETE  FROM





