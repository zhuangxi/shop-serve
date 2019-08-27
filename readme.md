sequelize-auto -o "./schema" -d zhou -h 127.0.0.1 -u root -p 3306 -x XXXXX -e mysql
sequelize-auto -o "./schema" -d shop -h 127.0.0.1 -u root -p 3306 -x root -e mysql

-o 参数后面的是输出的文件夹目录
-d 参数后面的是数据库名
-h 参数后面是数据库地址
-u 参数后面是数据库用户名
-p 参数后面是端口号
-x 参数后面是数据库密码，
-e 参数后面指定数据库为mysql