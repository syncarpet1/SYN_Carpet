import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Clock } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete insurance coverage for peace of mind and your protection',
    color: 'from-yellow-500 to-amber-600',
    iconBg: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with comprehensive quality assurance',
    color: 'from-amber-500 to-yellow-600',
    iconBg: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30'
  },
  {
    icon: CheckCircle,
    title: 'Certified Professionals',
    description: 'Trained and certified flooring specialists with proven expertise',
    color: 'from-orange-500 to-yellow-600',
    iconBg: 'from-orange-500/20 to-yellow-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Reliable scheduling and punctual delivery you can count on',
    color: 'from-yellow-600 to-amber-500',
    iconBg: 'from-yellow-600/20 to-amber-500/20',
    borderColor: 'border-yellow-600/30'
  }
];

const TrustBadges = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">Trust & Certification</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Trusted & <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Certified</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Your peace of mind is our priority. We're fully certified and insured for your protection.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <motion.div 
                className={`relative bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 h-full group-hover:${badge.borderColor} group-hover:bg-white/10`}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(218, 165, 32, 0.2)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ perspective: '1000px' }}
              >
                {/* Icon Container */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${badge.iconBg} backdrop-blur-sm border border-yellow-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    boxShadow: "0 20px 40px rgba(218, 165, 32, 0.3)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <badge.icon className="w-9 h-9 text-yellow-300 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {badge.title}
                  </h3>
                  
                  <p className="text-white/70 group-hover:text-white/90 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                    {badge.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/30 rounded-full group-hover:bg-yellow-400 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-amber-400/30 rounded-full group-hover:bg-amber-400 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -3, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-8 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl backdrop-blur-xl border border-amber-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-md" />
      </motion.div>
    </section>
  );
};

export default TrustBadges;