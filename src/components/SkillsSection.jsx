import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Send, X } from "lucide-react";
import { toast } from "react-toastify";

const COURSES = [
	{
		id: "animatsiya",
		title: "Animatsiya",
		subtitle: "YouTube orqali animatsiya kontenti bilan pul ishlash",
		bullets: [
			"Kontent g'oyalari: qayerdan trend topish",
			"Ssenariy va montaj tezkor usullari",
			"Monetizatsiya: reklama, affiliate, merch",
		],
	},
	{
		id: "BeamNG Drive",
		title: "BeamNG Drive",
		subtitle: "BeamNG Drive simulatsiyalaridan video kontent yaratish",
		bullets: [
			"Mashina fizikasi va spektakl sahnalar yaratish",
			"Overlay va ovoz dizayni bilan premium video",
			"Sustaining views: seriyalar va SEO",
		],
	},
	{
		id: "gita",
		title: "Gita V",
		subtitle: "Gita (Git + Agile) asosida loyihalar ko'rsatish va kurs",
		bullets: [
			"Git branching, PR workflow va yaxshi amaliyotlar",
			"Loyihani dokumentatsiya qilish va case study",
			"YouTube'da o'qituvchi sifatida pul ishlash strategiyalari",
		],
	},
];

export const SkillsSection = () => {
	const [activeCourse, setActiveCourse] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Telegram bot config (same as ContactSection)
	const token = "8380252689:AAHmZvPdI7Ky317LsR8r2srWT-LaEyzI0ck";
	const chatId = 761599828;
	const url = `https://api.telegram.org/bot${token}/sendMessage`;

	const openModal = (courseId) => setActiveCourse(courseId);
	const closeModal = () => setActiveCourse(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name") || "—";
		const phone = formData.get("phone") || "—";
		const note = formData.get("note") || "—";
		const course = formData.get("course") || "—";

		const message = `📩 *Yangi kurs so'rovi* \n\n 🎯 Kurs: ${course}\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n📝 Izoh: ${note}`;

		try {
			await axios.post(url, {
				chat_id: chatId,
				text: message,
				parse_mode: "Markdown",
			});
			form.reset();
			toast.success("So'rov yuborildi. Tez orada bog'lanamiz!");
			closeModal();
		} catch (err) {
			console.error(err);
			toast.error("So'rov yuborishda xatolik yuz berdi.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="courses" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
					Kurslarimiz —{" "}
					<span className="text-primary">3 tur</span>
				</h2>

				<p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
					YouTube orqali pul ishlash bo'yicha amaliy kurslar. Har bir kurs uchun
					batafsil ma'lumot va ro'yxatdan o'tish tugmasi mavjud.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{COURSES.map((c) => (
						<article
							key={c.id}
							className="bg-card p-6 rounded-lg shadow-xs flex flex-col"
						>
							<h3 className="text-xl font-semibold mb-2">{c.title}</h3>
							<p className="text-muted-foreground mb-4">
								{c.subtitle}
							</p>

							<ul className="mb-6 space-y-2 flex-1">
								{c.bullets.map((b, i) => (
									<li
										key={i}
										className="text-sm text-muted-foreground"
									>
										• {b}
									</li>
								))}
							</ul>

							<div className="mt-auto">
								<button
									onClick={() => openModal(c.id)}
									className={cn(
										"w-full px-4 py-2 rounded-md flex items-center justify-center gap-2 cosmic-button"
									)}
								>
									Batafsil / Ro'yxatdan o'tish
									<Send size={14} />
								</button>
							</div>
						</article>
					))}
				</div>
			</div>

			{/* Modal */}
			{activeCourse && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
				>
					<div
						className="absolute inset-0 backdrop-blur-md"
						onClick={closeModal}
						aria-hidden="true"
					/>

					<div className="relative bg-background w-full max-w-lg rounded-lg shadow-lg p-6 z-10">
						<button
							onClick={closeModal}
							className="absolute top-3 right-3 rounded-full p-1 hover:bg-secondary/50"
							aria-label="close"
						>
							<X size={16} />
						</button>

						<h3 className="text-2xl font-semibold mb-2">
							{
								COURSES.find((x) => x.id === activeCourse)?.title
							}
						</h3>
						<p className="text-sm text-muted-foreground mb-4">
							Ro'yxatdan o'tish uchun ma'lumotlaringizni yuboring. Biz siz bilan
							bog'lanamiz.
						</p>

						<form
							id="courseForm"
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							<input
								type="hidden"
								name="course"
								value={
									COURSES.find((x) => x.id === activeCourse)?.title
								}
							/>

							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1"
								>
									Ism
								</label>
								<input
									required
									name="name"
									id="name"
									className="w-full px-3 py-2 rounded-md border border-input"
									placeholder="Ism Familiya"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium mb-1"
								>
									Telefon
								</label>
								<input
									required
									name="phone"
									id="phone"
									className="w-full px-3 py-2 rounded-md border border-input"
									placeholder="+99890xxxxxxx"
								/>
							</div>

							<div>
								<label
									htmlFor="note"
									className="block text-sm font-medium mb-1"
								>
									Qo'shimcha izoh
								</label>
								<textarea
									name="note"
									id="note"
									rows={3}
									className="w-full px-3 py-2 rounded-md border border-input"
									placeholder="Sizni nima qiziqtiradi?"
								></textarea>
							</div>

							<div className="flex items-center gap-3">
								<button
									type="submit"
									disabled={isSubmitting}
									className="cosmic-button px-4 py-2 rounded-md flex items-center gap-2"
								>
									{isSubmitting
										? "Yuborilmoqda..."
										: "So'rov yuborish"}
									<Send size={14} />
								</button>

								<button
									type="button"
									onClick={closeModal}
									className="px-4 py-2 rounded-md border border-input bg-transparent"
								>
									Bekor qilish
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</section>
	);
};
