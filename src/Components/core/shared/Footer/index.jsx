import { footerData, footerLogo } from "@/src/constant/footer";
import { logo } from "@/src/constant/home/home";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import pay from "../../../../constant/footer/applepay.png";


const index = () => {
  const router = useRouter();
  const name = router?.pathname;
  return (
    <div className={`bg-black px-10 py-20 `}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-white">
        <div className="">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="block lg:hidden"></div>
        {footerData?.map((item, index) => (
          <div key={index}  >
            <h1 className="text-xl font-semibold mb-3">{item?.title}</h1>
            <ul className="space-y-2">
              {item?.list?.map((name) => (
                <Link href={name?.link}>
                  <li className="cursor-pointer text-sm lg:text-base my-2 hover:text-slate-300 duration-200">
                    {name?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex gap-8 ">
   
<div className="collapse w-[20%]  collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Bangladesh
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div>
<h1 className="text-white">ONYX <span className="text-3xl">.</span> </h1>
</div>
<div className="flex ml-[500px]">
  <h1 className="gap-3 mr-2 text-white">We accept</h1>
  <div className="flex gap-2 h-[25px] w-[50px] text-white">
  <img className=" h-[20px] w-[40px]" src="https://www.apple.com/v/apple-pay/k/images/overview/og__dq5nejr4bg02_image.png?202305190055" alt="" />
  <img className=" h-[20px] w-[40px]" src="data:image/png;base64,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" alt="" />
  <img className=" h-[20px] w-[40px]" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUIBxgWFhYYGRgYGRkdGRoYHSEjFhgeHBwcISEYHB0cIS4nHh4rHx4ZJz4rLi80NTU1HCY7QDs0Py40NTQBDAwMEA8QHhISHzQrJSs1NDU0NDQ0PTQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMAAwAAAAAAAAAAAAAABwgEBQYBAgP/xAA+EAACAQIDBAYGCAYCAwAAAAAAAQIDEQQFEgYhMYEHQVFhcZETFBUicqEyQlJUk6Kx0hY0gpLB0WLwRFOy/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EADERAQABAwIDBQcEAwEAAAAAAAABAgMRBCEFEjETQVGR8CJhcaGxweFScoHxFTLRFP/aAAwDAQACEQMRAD8AmIAHrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHEZrQw1TTOtShLd7sqkYys+Ds3czjV5nkGGzV3rUYTdramrT5SjZrzPaeTm9vOPcTnue/t3CfeaH4sP3D27hPvND8WH7ji846M6dSDeGqOEt9oVPeh4avpLx3kaY7CTwGLlTmtM4PTJdj7u61nzNXT6LTaj/Suc+GMIarldPWFiMLjaeMhenOE12xkpLzTMgr5szmM8rzylOLavOMZpcJRk7NPtVm/AsGndFTW6SdNXEZzE9J6O7dfMGFiM1w+Eq6Z16UZfZnUjGW/uk7mTWqxoUpTk7Rim2+xLe35Fec5zGWb5nUrSv78rpPjGP1Y7uyNudzrQ6P/wBNU5nER6h5cuckJ5efYRf+VQ/Fh+4yq2KhQoa5zjGKV3OUkopPr1PdYgvY7KPbOfwg17kXqn8Ed9ubsuZIfSrjPV9nY01xq1Ird9mCcnyuoLmSXtBTRfos01TM1ddunrd5TdmaZqmHT+3cJ95ofiw/cZOEx1LGxbp1Kc0nZunNSS7npe5lcCaOjLBeq7LxlbfVnKb719FfKJ3reH0ae3zxVMznDy3dmurDr7mJjsyo5fC9WrCC7ZSUb9yu95we3O3EsJiJYfDO047p1dz0vrhG/wBbhd9X6RlXrTxNVzm5Sk+MpNt+bPNLwu5dpiuucRPngrvRTOITpLbLARf8zT5an80jKwe0mDxsrQxFKUuqOpKb8Iys35Ffrnh2sXquC28bVT5QjjUT4LLqWpbjyajZfCPB7P0IO91CN73vdq7vfxNufPVRiqYie+VqOj5V8RDD03KcoxiuMpNKK8W+Bh+3cJ95ofiw/cRH0hZ3LNc8nBSfoqL0QXU5Je9O3be68InKmzY4Rz24rrqxM748Feq/icRCxuEx9LHX9HUhPTbVonGVr3tfS3a9n5MyiJOiXFeizirD7dNO3a4Sf+JyJbM7V2OwuzbicxHemoq5qcgAK7oAAAAAAAAAAAiDpWwHoM9hVS3VYK/xR3X8dOnyJfOG6V8F6fIIVFxpVFf4ZJxf5tBd4dc5NTT79vP8o7sZolEPBf8AblicmxPruVUqn/spwl/dFN/NldicOjvFes7JUv8Ahqh/bJ2+VjT4zRm1RX4Tjz/pFp53mGB0nZt6hkapRfvV3pfaoJXk+b0x5sh86LbzNva20c2neFP3IWe60fpPnLVyt2GryTLnm+a06Mb+/Kza4xileUu60Uy1obUafTxNX7p9fDb4o7lXPV8kndFuT+pZO68l71e2nuhG+nzd337jQdLWN9Jm9OkuEKep+Mnu+UfmSnh6UcPQjCKSjCKjFLgklZLkl8iCNscX69tPiJp3Wuy8IJQVv7bmbw+Zv6yq7PdmftEeSa77NERDSpOW5K7fBdr6kT617C2Senf6DDNrvcKbe/vbXzIZ2Swnr+0tCD4Oab8IJyfyiyeMbho4zBTpy+jOEoS8JRafyZJxi57duienX+M/iXNiNplXGc3Obcndtttvi2+LOj2Dyuhm2eqFd+6ouUY3trkvqvuS326/C6NTnGVzyfMZ0Zp3i9ztulHqnHtTuue4w4VHTmpRbTTumnZp9qfUzXrjtbU8k4zG0x3evNBG07rB08jwtOnpWHpWta2iP+Vc1mY7D4LMI76KpvtpPS+aXuvmjh9nukatgtMcQvSw3LUnarFdr6p87PvJQy3MqWa4RVKUlOL7OKfXFrqa7GfMXrOp0lWZmfjEzv8Az4/FcpqorjozTR7YZt7GyCpUTtNxcYfHJWT5ceRvGRD0pZv63m0aEX7tFO6XBznbiu2MbL+pnOisdvfinu6z8I/70e3KuWnLhm7veffFYSWE0qStrjGcfhlwZ9smy55tmlOjG/vySb7I/WfKNzs+ljL1h8Vh5xVoum6dlwSpu8UuU5eR9Ncv0036LX6on8ffyU4pzTNTndh8X6ltVQbdlKeh/wBfur8zj5E8lbMNV9XxMJrjGSkv6Wn/AILH0KqrUYyXCSTXNXMfjNHt01+MTHl/afTztMPoADHWAAAAAAAAAAADWbRYH2jkdanxcoSt4pXXzSNmeREzExMCsyeqNzudlM+9l7G4xKVpxlFQ/wCLqxcU0uuzhKXI5raTA+zc+rU7WUaktPwyepW5NLkay/u2/wC7r2fzfmfYXLdGptxnpPLP3/ChEzTI3dkm9E+UWpzxMlxbp0/BW1y893Jkb4XDSxeJjCCvOUlGK7W2rciw2VYCOWZdTpR4Qio+NuL5u75lLi9/ktRajrV9I9fJJYpzVmTNcUsDllWq+EKc5d70xbsV1lJzk297bu32t72/MmnpKxvqmy04331JRgu9N3l+VMhU44Nbxbqr8Zx5Pb85mHd9E+C9NnU6r4U6dl8Un+tk/Mlw4XonwfochnUa31Kjt3xglFfm1m4zva2hkeZRpVda1Q1a4rUo3bW+K39V9yZn67mvaqqmiM42290bpbWKaN2bnmRUM+w2itG9voyW6cH2xkv04EXbRbAV8qUp02q1Jb926pH4o8Gu9PkrEp4TPsLjY3hiKcvCavzT3o9Mx2hwuW0HKpWglbgneT8Ixu2yPS6q/Yq5aM/tmJe10U1RmVfzpuj/ADieWbQQhqeiq9E49V39GXinbk2aHMq8cTmFWcVpjOpUnGP2Yzm5Jck0bLY3BPHbTUIpcKim+5Q96/yPpdREVaernjblzMT3bfXKpRtVsm7OswjlOVVK0uEIt27XwS5tpcyvWJryxWJnObvKUnKT7XJ3ZI3SxnF5QwsX2VKndxUI/KT8u0jUo8Jsclqbk9avp/aS/VmcO+6LcNTpYypiKlSEdMdEFKSW+VnKVm+pJLmzd9J06WN2fjKFSEpU6kWlGSbtL3XuT38URM1cKKXUTVaGatTF+a+kxtjw9+fs57X2eXDyTvsRi/XtlMPK+9Q0vxg3Bv8ALfmQQS30TYr0mRzp9cKjfKaT/W5DxejNiKu+Jj5+odWJ9p3YAPnFsAAAAAAAAAAAAARB0r4L0OfQqJbqtNX3fWg7P8rgcOWKzDKqGZKKrUqdTTfTripWv2XMP+FcD90w/wCHH/RsabitNq1TbqpmZjb+EFdnmnMI96LMn9azOeIkvdpLTC/Bzlbfyj/9IlsxsDgKWX0NFKEKcbt6YRUY3fF2RkmdqtROouTcnbwhLbo5Ywi7pdxl6+HpLhFTnJd7tGPPdPzI54IsNjckw2YVtdWhSnK1tU4RlKy6rtcDHeyuBa/lMP8Ahx/0aOl4nbsWot8s7e9FXamqqZy99mMH6hs/RhazVON+28ld377siDb3FPF7VVm00oNQV7q6irXV+rVqJ1sYuMy6ljo2qU4TXZOKf6opaTV9hdm7VGc/d3XRzU8sSrkwkuonOvsPl9eV3h0vhlOK8oySPNDYnL8O7rDRfxOcvlKTNf8AzVjHSr5Y+v2Q9hUhTL8vq5niFGjCU5N29xNqPfJrdFdrZLuyWzcNlMvnWrSTqOLc5L6MILfoi+vgrvrdjq8NhoYSGmEIwXZFJL5DE4aGLoOE4xnCStKMleLXY0+Jm6riNd+OSIxT3+MpaLUU796vWcZhLNsyqVp3vOTdn9VfVjyVlyNpsRkyzvPownHVCKc6i6pJcIvubaJf/hbA/dKH4cf9GTgMow+Wzk6NGnTcklJwgotpcE7LfxZZr4tT2c0W6ZjbEb9PUOIsTnMtb/BWA+7Q85fuD2KwFv5aHnL9x0IMrt7v6585T8seCuGY4f1XH1IfYqTh/ZJx/wAHadE2L9FndWn1TpaucJLd5Tl5EjV9nMHia0pzw1GUpO8pSpxcpPtba3s9sHkOFwNdTp4elCaTSlCCUknxV0jTv8Tpu2JtzTOZiN898IabMxVnLZgAyE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" alt="" />
  </div>
 
</div>

      </div>
    </div>
  );
};

export default index;
