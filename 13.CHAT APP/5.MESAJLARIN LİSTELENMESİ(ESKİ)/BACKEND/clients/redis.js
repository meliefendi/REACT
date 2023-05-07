const redis = require("redis");

//REDİS KULLANILMA SEBEBİ GELEN MESAJLARI VERİTABANINA İLETMEK İÇİN VE GEÇNİŞ MESAJLARI KAYIT ETMEK VE ULAŞILMAK İÇİN KULLANIYORUZ.
const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db: 1,
	});
};

module.exports.getClient = getClient;
