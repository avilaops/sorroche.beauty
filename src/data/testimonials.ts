export type Testimonial = {
  name: string;
  text: string;
  service: string;
  date?: string;
  source?: string;
  photo?: string;
};

/**
 * Intentionally empty: no reviews have been supplied.
 * Populate here and the section renders automatically.
 */
export const testimonials: Testimonial[] = [];
