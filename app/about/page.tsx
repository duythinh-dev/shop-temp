"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Clock, Heart, ShieldCheck, Truck, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1600"
            alt="About us background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Về chúng tôi
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chúng tôi là đơn vị tiên phong trong lĩnh vực thương mại điện tử tại Việt Nam, mang đến trải nghiệm mua sắm
            trực tuyến tuyệt vời nhất cho khách hàng.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Câu chuyện của chúng tôi</h2>
            <p className="text-muted-foreground">Hành trình xây dựng và phát triển thương hiệu Modern Shop</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our story"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Khởi đầu từ năm 2015</h3>
              <p>
                Modern Shop được thành lập vào năm 2015 với tầm nhìn trở thành nền tảng thương mại điện tử hàng đầu tại
                Việt Nam. Chúng tôi bắt đầu với một đội ngũ nhỏ nhưng đầy nhiệt huyết và quyết tâm mang đến trải nghiệm
                mua sắm trực tuyến tốt nhất cho người tiêu dùng Việt Nam.
              </p>
              <p>
                Trải qua nhiều thách thức và khó khăn, chúng tôi đã không ngừng phát triển và mở rộng danh mục sản phẩm,
                cải thiện dịch vụ khách hàng và nâng cao trải nghiệm người dùng. Đến nay, Modern Shop đã trở thành điểm
                đến tin cậy của hàng triệu khách hàng với hàng ngàn sản phẩm chất lượng từ các thương hiệu uy tín trong
                và ngoài nước.
              </p>
              <p>
                Chúng tôi tự hào về hành trình của mình và cam kết tiếp tục đổi mới để mang đến những sản phẩm và dịch
                vụ tốt nhất cho khách hàng.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-muted-foreground">Định hướng phát triển và giá trị cốt lõi của chúng tôi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sứ mệnh</h3>
              <p className="text-muted-foreground">
                Sứ mệnh của chúng tôi là mang đến trải nghiệm mua sắm trực tuyến thuận tiện, an toàn và đáng tin cậy cho
                người tiêu dùng Việt Nam. Chúng tôi cam kết cung cấp các sản phẩm chất lượng với giá cả cạnh tranh, dịch
                vụ khách hàng xuất sắc và giao hàng nhanh chóng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tầm nhìn</h3>
              <p className="text-muted-foreground">
                Tầm nhìn của chúng tôi là trở thành nền tảng thương mại điện tử hàng đầu tại Việt Nam, được yêu thích và
                tin dùng bởi hàng triệu người tiêu dùng. Chúng tôi hướng tới việc xây dựng một hệ sinh thái thương mại
                điện tử toàn diện, kết nối người mua và người bán, tạo ra giá trị bền vững cho cộng đồng.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-muted-foreground">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Chất lượng</h3>
              <p className="text-muted-foreground">
                Chúng tôi cam kết cung cấp sản phẩm chất lượng cao, đáp ứng tiêu chuẩn và mong đợi của khách hàng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Uy tín</h3>
              <p className="text-muted-foreground">
                Xây dựng niềm tin với khách hàng thông qua sự minh bạch, trung thực và đáng tin cậy trong mọi giao dịch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Khách hàng là trọng tâm</h3>
              <p className="text-muted-foreground">
                Đặt khách hàng vào trung tâm của mọi quyết định, luôn lắng nghe và đáp ứng nhu cầu của khách hàng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <Truck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Dịch vụ xuất sắc</h3>
              <p className="text-muted-foreground">
                Cung cấp dịch vụ khách hàng tận tâm, giao hàng nhanh chóng và hỗ trợ sau bán hàng chu đáo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Đổi mới liên tục</h3>
              <p className="text-muted-foreground">
                Không ngừng cải tiến và đổi mới để mang đến trải nghiệm mua sắm tốt hơn cho khách hàng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg"
            >
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Trách nhiệm xã hội</h3>
              <p className="text-muted-foreground">
                Hoạt động kinh doanh có trách nhiệm, quan tâm đến cộng đồng và môi trường xung quanh.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-muted-foreground">
              Những con người tài năng và đam mê đằng sau thành công của Modern Shop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-sm text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">8+</div>
              <p>Năm kinh nghiệm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p>Sản phẩm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">500,000+</div>
              <p>Khách hàng hài lòng</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Đối tác thương hiệu</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Giám đốc điều hành",
    bio: "Hơn 15 năm kinh nghiệm trong lĩnh vực thương mại điện tử và quản lý doanh nghiệp.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Giám đốc marketing",
    bio: "Chuyên gia marketing với nhiều chiến dịch thành công cho các thương hiệu lớn.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Giám đốc công nghệ",
    bio: "Kỹ sư phần mềm với chuyên môn về phát triển ứng dụng web và thương mại điện tử.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    position: "Giám đốc vận hành",
    bio: "Chuyên gia trong lĩnh vực quản lý chuỗi cung ứng và vận hành thương mại điện tử.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

