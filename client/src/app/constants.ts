export const COUNTRY_CODES = "ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg, fr,gb,gr, hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za"

export const COUNTRY_API = "https://restcountries.com/v3.1/alpha"

export const NEWS_CATEGORIES = [
	"business", "entertainment", "general", "health", "science",
	"sports", "technology",
]

//localhost on Angular
//export const NEWS_API = "https://newsapi.org/v2/top-headlines"
//localhost on SpringBoot
export const NEWS_API = "http://localhost:8080/api/news"
//Deploy on Railway
// export const NEWS_API = "https://deft-collar-production.up.railway.app/api/news"